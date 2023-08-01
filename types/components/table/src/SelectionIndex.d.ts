export const SelectionIndex: import("vue").DefineComponent<{
    scope: {
        type: ObjectConstructor;
        default: () => {
            row: {};
        };
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    columnProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    checked: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    onChecked: {
        type: FunctionConstructor;
    };
}, () => JSX.Element, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    scope: {
        type: ObjectConstructor;
        default: () => {
            row: {};
        };
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    columnProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    checked: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    onChecked: {
        type: FunctionConstructor;
    };
}>>, {
    checked: boolean;
    scope: Record<string, any>;
    prop: string;
    columnProps: Record<string, any>;
}, {}>;
//# sourceMappingURL=SelectionIndex.d.ts.map