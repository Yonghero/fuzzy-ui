/**
 * 注入表头覆盖层
 * @param {*} HeaderRenderer 覆盖层的组件
 * @param {*} valuesMap2Data checkbox 选中的数据
 * @returns
 */
export function useHeadVNode(HeaderRenderer: any, valuesMap2Data: any): {
    createHeaderVNode: () => void;
    removeHeaderVNode: () => void;
};
//# sourceMappingURL=useHeadVNode.d.ts.map