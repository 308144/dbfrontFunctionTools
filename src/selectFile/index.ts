/** 调起系统文件选择器 */
export default function selectFile(
  accept: string,
  callback: (n: File) => void,
) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = `${accept}`;
  input.click();
  input.onchange = () => {
    if (input.files) {
      if (input.files[0].name.includes(`${accept}`)) {
        const file = input.files[0];
        callback(file);
      } else {
        alert(`请上传${accept}文件`);
      }
    }
  };
}
