const folders = [
  {
    id: 5,
    name: 'Klasör 1',
    files: [
      { id: 17, name: 'profil.jpg' },
      { id: 18, name: 'manzara.jpg'},
      { id: 8, name: 'landscape.jpg'},
    ],
  },
  {
    id: 6,
    name: 'Klasör 2',
    files: [
      { id: 21, name: 'foto.png' },
      { id: 22, name: 'dosya.xls' },
    ],
  },
  {
    id: 7,
    name: 'Klasör 3',
  },
  {
    id: 10,
    name: 'Klasör 4',
    files: [
      { id: 44, name: 'foto2.png' },
      { id: 46, name: 'dosya2.xls' },
    ],
  }
]

  //init variables
  let targetFile = null;
  let targetFolder = null;
 
  

function ReachFile(targetfileId, type) {
  //helper function
  // hedef dosyaya ulaşma , reach the target file

  for(const folder of folders){
      const {files} = folder //destruction
      if(files) { //dosyalar varsa dolanacak , dosyalar varsa dolanacak
          targetFolder = folder; 
          targetFile = (files.find( file => file.id === targetfileId))
          if(targetFile) {//dosyaya ulaştıysak , if it reached the file
               break;
          }
      }
  }
  // tipe göre return ederiz , We return it according to the type value.
  if(type === "move" || type === "remove" ||  type === "parentFolderOf") {

      return  targetFile, targetFolder 

  } else if (type === "copy") {
      return  targetFile 
  }

}


function move(targetfileId, targetFolderId) {


  targetFile, oldFolder =  ReachFile(targetfileId, "move")

  //hedef klasöre ulaşma , // reach the destination folder
  targetFolder = folders.find(folder => folder.id === targetFolderId)
  
  //Error handles
  if(!targetFile) {
    
    console.log("File not found")
    return false
  }
  
  if(!targetFolder){
    console.log("Folder not found")
    return false
  }
 
  //ilgili dosyayı klasöre taşıma , move the file to the relevant folder
  //ilk önce klasör içerisinde files var mı diye bakmamız gerekli , First we need to check if there are files in the folder.
  if(!targetFolder.files) { //files yoksa biz oluşturalım, If there are no files, let's create
    targetFolder.files = [] //boş bir array oluşturduk 
  }
  targetFolder.files.push(targetFile)


  //dosya eski klasörden silinmeli , file should be deleted from old folder
  const index = oldFolder.files.findIndex(prop => prop.id === targetFile.id);
  oldFolder.files.splice(index,1);
  
  console.log("Move operation completed successfully")

  
}


function copy (targetfileId, targetFolderId) {
 targetFile = null;
 targetFolder = null;

// hedef dosyaya ulaşma , reach the target file
  targetFile = ReachFile(targetfileId, "copy")

//hedef klasöre ulaşma , reach destination folder
targetFolder = folders.find(folder => folder.id === targetFolderId)

//Error handles
if(!targetFile) {
  console.log("File not found")
  return false
}
if(!targetFolder){
  console.log("Folder not found")
  return false
}

//ilgili dosyayı klasöre kopyalama , copying the relevant file to the destination folder
//yeni dosyanın id'si değişicek ve referans bağlantısını koparmamız gerekli
//öncelikle aynı referans değişkeni olmamaları gerekli ondan ilgili satırın referans bağını kesmemiz gerekli.

CopiedTargetFile = { //yeni obje oluşturarak referans bağını kırabiliriz , We can break the reference link by creating a new object.
  id: Math.floor(Math.random() * 1000), // 0-1000 arasında bir id üretiyoruz , We generate an id between 0-1000
  name: targetFile.name
 }

 if(!targetFolder.files) { //files yoksa biz oluşturalım
  targetFolder.files = [] 
}

 //ilgili dosyayı klasöre taşıma , move related file to folder
 targetFolder.files.push(CopiedTargetFile)

 console.log("Copy operation completed successfully")

}

function remove(targetfileId) {
 
  targetFile = null;
  targetFolder = null;

  targetFile, targetFolder =  ReachFile(targetfileId, "remove")

//Error handles
if(!targetFile) {
  console.log("The file to be deleted was not found")
  return false
}


// dosya silme işlemi , file deletion
//https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property?answertab=active#tab-top
const index = targetFolder.files.findIndex(prop => prop.id === targetFile.id);
targetFolder.files.splice(index,1);

console.log("Deletion operation completed successfully")
}

// klasör silme işlemi ,  folder deletion
function removeFolder(targetFolderId) {

const index = folders.findIndex(prop => prop.id === targetFolderId);

if(index === -1 ){
  console.log("The folder to delete does not exist")
}else { 
  folders.splice(index,1);
  console.log("Folder deletion operation completed successfully")
  }

}

function parentFolderOf(targetfileId) {

  
 targetFile = null;
 targetFolder = null;

 targetFile, targetFolder =  ReachFile(targetfileId, "parentFolderOf")
 

if(!targetFile) {
  console.log("File not found")
  return false
}

if(targetFolder) { // if folder exists
  console.log(`Parent Folder Of  : ${targetFolder.id}`) 
} else { //if the file does not exist

  console.log(`Parent folder not found`)
   }
}

 //  move(21,3) // dosyayı klasöre taşıyacak
 //  copy(17,7) // kopyasını oluşturacak
 //  remove(8) // dosyayı silecek  
 //removeFolder(5) //klasörü ve altındaki tüm dosyaları silecek
  // parentFolderOf(8) // ==> 5

