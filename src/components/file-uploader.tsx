import { useFileUploader } from "@/hooks/use-file-uploader";

export const FileUploader = () => {
  const { actions, validators, states } = useFileUploader();

  return (
    <>
      <form className="form" onSubmit={actions.handleFileSubmit}>
        <h1 className="text-xl font-semibold text-primary">
          # React File Uploading
        </h1>

        <label className="box">
          <span>Select image:</span>
          <input
            type="file"
            accept="image/*"
            onChange={actions.handleFileChange}
          />
        </label>

        <button
          type="submit"
          className="button"
          disabled={!validators.isFormValid}
        >
          Upload File
        </button>
      </form>

      {/* LOADING MESSAGE */}
      {states.status === "uploading" && (
        <p className="font-light text-loading">
          file uploading on the server in progress...
        </p>
      )}

      {/* SUCCESS MESSAGE */}
      {states.status === "success" && (
        <p className="font-light text-success">
          file uploaded successfully on the server!
        </p>
      )}

      {/* ERROR MESSAGE */}
      {states.status === "error" && (
        <p className="font-light text-error">
          something went wrong, please try again!
        </p>
      )}
    </>
  );
};
