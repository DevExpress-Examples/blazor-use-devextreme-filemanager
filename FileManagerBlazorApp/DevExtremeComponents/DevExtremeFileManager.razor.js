export async function initializeFileManager(element, apiUrl) {

    const provider = new DevExpress.fileManagement.RemoteFileSystemProvider({
        endpointUrl: apiUrl,
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

