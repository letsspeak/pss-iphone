﻿/*   Photoshop Script ResizeRetinaToNormal.jsx   Finds @2x.png image files for retina display in the specified folder and    resize them to the half size for normal display.*/// Keep the original unit and change it to pixcelvar strtRulerUnits = preferences.rulerUnits;preferences.rulerUnits = Units.PIXELS;// Select foldervar folder = Folder.selectDialog("Select a folder that contains .png files.");var fileList = folder.getFiles("*.png");for (var s in fileList){    var file = fileList[s];    open(file);        var fileName = activeDocument.name.match(/(.*)\.[^\.]+$/)[1];        // create folders    var normalFolder = Folder(activeDocument.path + "/normal");    if(!normalFolder.exists) normalFolder.create();        var hdFolder = Folder(activeDocument.path + "/hd");    if(!hdFolder.exists) hdFolder.create();        // save -hd image    var hdSaveFile = new File(activeDocument.path + "/hd/" + fileName + "-hd.png");    var webSaveOptions = new ExportOptionsSaveForWeb();    webSaveOptions.format = SaveDocumentType.PNG;    webSaveOptions.PNG8 = false;    webSaveOptions.transparency = true;     activeDocument.exportDocument(hdSaveFile, ExportType.SAVEFORWEB, webSaveOptions);            // resize image    activeDocument.resizeImage(        activeDocument.width / 2.0,        activeDocument.height / 2.0,        activeDocument.resolution,        ResampleMethod.BICUBIC);    // save    var resizedSaveFile = new File(activeDocument.path + "/normal/" + fileName + ".png");    var webSaveOptions = new ExportOptionsSaveForWeb();    webSaveOptions.format = SaveDocumentType.PNG;    webSaveOptions.PNG8 = false;    webSaveOptions.transparency = true;     activeDocument.exportDocument(resizedSaveFile, ExportType.SAVEFORWEB, webSaveOptions);    activeDocument.close(SaveOptions.DONOTSAVECHANGES);}// Revert the unit preferencepreferences.rulerUnits = strtRulerUnits;