declare const _default: import("vue").DefineComponent<{
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    shouldValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
    businessType: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "fail" | "update:modelValue")[], "submit" | "fail" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    shouldValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
    businessType: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onSubmit?: (...args: any[]) => any;
    onFail?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    template: unknown[];
    labelPosition: string;
    labelWidth: string;
    modelValue: Record<string, any>;
    shouldValidate: boolean;
    businessType: string;
}, {}>;
export default _default;
//# sourceMappingURL=DialogForm.d.ts.map