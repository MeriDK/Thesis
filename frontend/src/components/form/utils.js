import customAxios from "../../customAxios";
import { saveAs } from "file-saver";

export const getGeneratedLevel = async (
  file,
  levelChecked,
  handleCloseModal,
  controller
) => {
  const formData = new FormData();
  formData.append("file", file);
  await customAxios
    .post("/set", { options: levelChecked, signal: controller.signal })
    .then(() => {
      customAxios
        .post("/upload", formData, {
          responseType: "blob",
          signal: controller.signal,
        })
        .then(res => {
          const blob = new Blob([res.data], {
            type: "application/octet-stream",
          });
          const filename = "result.zip";
          saveAs(blob, filename);
          handleCloseModal();
        });
    });
};
