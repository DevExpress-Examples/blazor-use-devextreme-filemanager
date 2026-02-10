using DevExtreme.AspNet.Mvc.FileManagement;
using Microsoft.AspNetCore.Mvc;

namespace FileManagerBlazorApp.Controllers;

public class FileManagerApiController : Controller {
    private IWebHostEnvironment _hostingEnvironment;

    public FileManagerApiController(IWebHostEnvironment environment) {
        _hostingEnvironment = environment;
    }

    [AutoValidateAntiforgeryToken]
    [Route("api/file-manager-file-system")]
    public object FileSystem(FileSystemCommand command, string arguments) {
        var config = new FileSystemConfiguration {
            Request = Request,
            FileSystemProvider = new PhysicalFileSystemProvider(Path.Combine(_hostingEnvironment.ContentRootPath, "Documents")),
            AllowDownload = true,
            AllowCreate = true,
            AllowCopy = true,
            AllowMove = true,
            AllowDelete = true,
            AllowRename = true,
            AllowUpload = true
        };
        var processor = new FileSystemCommandProcessor(config);
        var result = processor.Execute(command, arguments);
        return result.GetClientCommandResult();
    }
}