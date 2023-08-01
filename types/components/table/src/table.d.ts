declare var _default: import("vue").DefineComponent<{
    columnIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: ArrayConstructor;
        default: () => any[];
    };
    renderer: {
        type: ObjectConstructor;
        default: () => {};
    };
    EleRef: {
        type: ObjectConstructor;
        default: () => {};
    };
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
}, () => JSX.Element, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("selection" | "headerSelection")[], "selection" | "headerSelection", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columnIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: ArrayConstructor;
        default: () => any[];
    };
    renderer: {
        type: ObjectConstructor;
        default: () => {};
    };
    EleRef: {
        type: ObjectConstructor;
        default: () => {};
    };
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>> & {
    onSelection?: (...args: any[]) => any;
    onHeaderSelection?: (...args: any[]) => any;
}, {
    data: unknown[];
    template: unknown[];
    columnIndex: boolean;
    columnSelection: boolean;
    renderer: Record<string, any>;
    EleRef: Record<string, any>;
}, {}>;
export default _default;
//# sourceMappingURL=table.d.ts.map