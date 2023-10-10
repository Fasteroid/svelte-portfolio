"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineData = void 0;
function defineData(loadParent, data) {
    return () => {
        const childData = Object.assign(Object.assign({}, loadParent()), data);
        childData.titlePath.push(data.title);
        return childData;
    };
}
exports.defineData = defineData;
