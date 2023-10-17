function defineData(loadParent, data) {
  return () => {
    const childData = {
      ...loadParent(),
      ...data
    };
    childData.titlePath.push(data.title);
    return childData;
  };
}
export {
  defineData as d
};
