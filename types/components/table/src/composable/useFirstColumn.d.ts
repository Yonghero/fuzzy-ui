/**
 * 表格第一列的配置内容
 * @param {*} columnProps
 * @returns
 */
export function useFirstColumn(columnProps: any): {
    selectionValues: any;
    FirstColumn: import("vue").DefineComponent<{
        index: {
            type: BooleanConstructor;
        };
        selection: {
            type: BooleanConstructor;
        };
    }, () => JSX.Element | (() => void), any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        index: {
            type: BooleanConstructor;
        };
        selection: {
            type: BooleanConstructor;
        };
    }>>, {
        index: boolean;
        selection: boolean;
    }, {}>;
};
//# sourceMappingURL=useFirstColumn.d.ts.map