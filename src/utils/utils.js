const getStyle = ({ provided, style, isDragging }) => {
  const combinedStyle = {
    ...style,
    ...provided.draggableProps.style,
  };

  const margin = 12;
  const styleWithSpacing = {
    ...combinedStyle,
    height: isDragging ? combinedStyle.height : combinedStyle.height - margin,
    marginBottom: margin,
    borderColor: isDragging ? '#059669' : combinedStyle.borderColor,
    boxShadow: isDragging ? '0px 0px 20px #064E3B' : combinedStyle.boxShadow,
  };

  return styleWithSpacing;
};

const reorderItems = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removedItem] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removedItem);

  return result;
};

export { getStyle, reorderItems };
