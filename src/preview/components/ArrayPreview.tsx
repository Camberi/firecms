import {

    PreviewComponentProps,
    PreviewSize
} from "../../preview";
import ErrorBoundary from "../../components/ErrorBoundary";

import React from "react";

import { Divider } from "@material-ui/core";
import { PreviewComponent } from "../PreviewComponent";
import { useStyles } from "./styles";

export function ArrayPreview({
                                       name,
                                       value,
                                       property,
                                       size}: PreviewComponentProps<any[]> ) {

    const classes = useStyles();

    if (property.dataType !== "array")
        throw Error("Picked wrong preview component ArrayPreview");

    const values = value;

    if (!values) return null;

    const childSize: PreviewSize = size === "regular" ? "small" : "tiny";

    return (
        <>
            {values &&
            values.map((value, index) =>
                <React.Fragment key={"preview_array_" + value + "_" + index}>
                    <div className={classes.arrayItemBig} >
                        <ErrorBoundary>
                            <PreviewComponent
                                name={name}
                                value={value}
                                property={property.of}
                                size={childSize}/>
                        </ErrorBoundary>
                    </div>
                    {index < values.length - 1 && <Divider/>}
                </React.Fragment>
            )}
        </>
    );
}
