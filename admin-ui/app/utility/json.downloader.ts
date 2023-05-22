const downloadJsonFile = (items:any) => {
  const jsonData = items.projectJson;
  const fileName = `project-${new Date().toISOString().slice(0, 10)}.json`;
  const data = new Blob([JSON.stringify(jsonData)], { type: 'text/json' });
  const jsonURL = window.URL.createObjectURL(data);
  const link = document.createElement('a');
  document.body.appendChild(link);
  link.href = jsonURL;
  link.setAttribute('download', fileName);
  link.click();
  document.body.removeChild(link);
};

export default downloadJsonFile;
