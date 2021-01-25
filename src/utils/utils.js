const getStyle = ({ provided, style, isDragging }) => {
  const combined = {
    ...style,
    ...provided.draggableProps.style,
  };

  const margin = 12;
  const styleWithSpacing = {
    ...combined,
    height: isDragging ? combined.height : combined.height - margin,
    top: isDragging ? 0 : combined.top,
    width: isDragging ? combined.width : '-webkit-fill-available',
    marginTop: margin,
  };
  return styleWithSpacing;
};

const areEqual = (prevProps, nextProps) => (
  prevProps.item.id === nextProps.item.id
);

export { getStyle, areEqual };
