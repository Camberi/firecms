import React from "react";
import { DateTimePicker } from "@material-ui/pickers";

import { FieldProps } from "../../models";

import { FieldDescription } from "../../components";
import { LabelWithIcon } from "../components/LabelWithIcon";
import { useClearRestoreValue } from "../useClearRestoreValue";
import { CMSAppProps } from "../../CMSAppProps";
import { useAppConfigContext } from "../../contexts";
import { defaultDateFormat } from "../../util/dates";

type DateTimeFieldProps = FieldProps<Date>;

export default function DateTimeField({
                                          name,
                                          value,
                                          setValue,
                                          autoFocus,
                                          error,
                                          showError,
                                          disabled,
                                          touched,
                                          property,
                                          includeDescription,
                                          dependsOnOtherProperties
                                      }: DateTimeFieldProps) {


    const internalValue = value || null;

    const appConfig: CMSAppProps | undefined = useAppConfigContext();
    const dateFormat: string = appConfig?.dateTimeFormat ?? defaultDateFormat;

    useClearRestoreValue({
        property,
        value,
        setValue
    });

    return (
        <React.Fragment>

            <DateTimePicker
                fullWidth
                clearable
                autoFocus={autoFocus}
                value={internalValue}
                format={dateFormat}
                label={<LabelWithIcon scaledIcon={false} property={property}/>}
                error={showError}
                disabled={disabled}
                helperText={showError ? error : null}
                onChange={(dateValue) => {
                    return setValue(
                        dateValue
                    );
                }}
                inputVariant={"filled"}
                InputProps={{ style: { padding: "4px" } }}
            />

            {includeDescription &&
            <FieldDescription property={property}/>}

        </React.Fragment>
    );
}
