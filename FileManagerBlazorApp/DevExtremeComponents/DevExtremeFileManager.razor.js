export async function initializeFileManager(element, apiUrl) {

    const provider = new DevExpress.fileManagement.RemoteFileSystemProvider({
        endpointUrl: apiUrl,
        beforeAjaxSend: function ({ headers, formData, xhrFields }) {
            headers.RequestVerificationToken = document.getElementsByName("__RequestVerificationToken")[0].value;
        },
        beforeSubmit: function ({ formData }) {
            formData["__RequestVerificationToken"] = document.getElementsByName("__RequestVerificationToken")[0].value;
        }
    });

    return new DevExpress.ui.dxFileManager(element, {
        fileSystemProvider: provider,
        permissions: {
            download: true,
            create: true,
            copy: true,
            move: true,
            delete: true,
            rename: true,
            upload: true
        }
    });
}

