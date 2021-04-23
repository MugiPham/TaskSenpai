let jsonOBJ = JSON.parse(project.JSON);

function LoadTextFromFile(fileElement) {
    var file = fileElement.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function(evt)
        {
            var jsonText = evt.target.result;
            var jsonOBJ = JSON.parse(jsonText);
        }  
    }
}

