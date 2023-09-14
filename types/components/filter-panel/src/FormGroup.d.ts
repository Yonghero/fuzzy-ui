declare const _default: import("vue").DefineComponent<{
    index: {
        type: NumberConstructor;
        required: true;
    };
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
    logical: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("remove" | "update:logical")[], "remove" | "update:logical", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    index: {
        type: NumberConstructor;
        required: true;
    };
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
    logical: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onRemove?: (...args: any[]) => any;
    "onUpdate:logical"?: (...args: any[]) => any;
}, {
    template: unknown[];
    logical: string;
}, {}>;
export default _default;
//# sourceMappingURL=FormGroup.d.ts.map