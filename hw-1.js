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

function move(targetfileId, targetFolderId) {
    
     targetFile = null;
     targetFolder = null;

    // hedef dosyaya ulaşma

    for(const folder of folders){
       const {files} = folder //destruction
       if(files) { //dosyalar varsa dolanacak  
        oldFolder = folder //move işleminden sonra eski klasördeki kaydı silmemiz gerekiyor 
        targetFile = (files.find( file => file.id === targetfileId))
       
        if(targetFile) {//dosyaya ulaştıysak
          break;
        }
       }
    }

    //hedef klasöre ulaşma
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
   
    //ilgili dosyayı klasöre taşıma
    //ilk önce klasör içerisinde files var mı diye bakmamız gerekli
    if(!targetFolder.files) { //files yoksa biz oluşturalım
      targetFolder.files = [] //boş bir array oluşturduk 
    }
    targetFolder.files.push(targetFile)
  
  
    //dosya eski klasörden silinmeli
    const index = oldFolder.files.findIndex(prop => prop.id === targetFile.id);
    oldFolder.files.splice(index,1);
    
    console.log("Move operation completed successfully")

    
}


function copy (targetfileId, targetFolderId) {
   targetFile = null;
   targetFolder = null;

  // hedef dosyaya ulaşma

  for(const folder of folders){
     const {files} = folder //destruction
     if(files) { //dosyalar varsa dolanacak
      targetFile = (files.find( file => file.id === targetfileId))
      if(targetFile) {//dosyaya ulaştıysak
        break;
      }
     }
  }

  //hedef klasöre ulaşma
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

  //ilgili dosyayı klasöre kopyalama
  //yeni dosyanın id'si değişicek ve referans bağlantısını koparmamız gerekli
  //öncelikle aynı referans değişkeni olmamaları gerekli ondan ilgili satırın referans bağını kesmemiz gerekli.
 
  CopiedTargetFile = { //yeni obje oluşturarak referans bağını kırabiliriz.
    id: Math.floor(Math.random() * 1000), // 0-1000 arasında bir id üretiyoruz
    name: targetFile.name
   }

   if(!targetFolder.files) { //files yoksa biz oluşturalım
    targetFolder.files = [] //boş bir array oluşturduk 
  }

   //ilgili dosyayı klasöre taşıma
   targetFolder.files.push(CopiedTargetFile)

   console.log("Copy operation completed successfully")

}

function remove(targetfileId) {
   
    targetFile = null;
    targetFolder = null;

  // hedef dosyaya ulaşma
  for(const folder of folders){
    const {files} = folder //destruction
    if(files) { //dosyalar varsa dolanacak
     targetFolder = folder; //geçiçi olarak atadık break ifadesi ile çıkılırsa target folder en son folder yani hedef olmuş olur
     targetFile = (files.find( file => file.id === targetfileId))
     
     if(targetFile) {//dosyaya ulaştıysak
      break;
      } 
    }
 }

  //Error handles
  if(!targetFile) {
    console.log("The file to be deleted was not found")
    return false
  }
 

 // dosya silme işlemi
 //https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property?answertab=active#tab-top
  const index = targetFolder.files.findIndex(prop => prop.id === targetFile.id);
  targetFolder.files.splice(index,1);

  
  console.log("Deletion operation completed successfully")
}

// klasör silme işlemi
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

  // hedef dosyaya ulaşma
  for(const folder of folders){
     const {files} = folder //destruction
     if(files) { //dosyalar varsa dolanacak
      targetFolder = folder;
      targetFile = (files.find( file => file.id === targetfileId)) 
      
      if(targetFile) {//dosyaya ulaştıysak 
        break;
      } 
     }
  }

  if(!targetFile) {
    console.log("File not found")
    return false
  }

  if(targetFolder) {
    console.log(`Parent Folder Of  : ${targetFolder.id}`) 
  } else {
    console.log(`Parent folder not found`)
  }


}

//   move(18,7) // dosyayı klasöre taşıyacak
//   copy(17,6) // kopyasını oluşturacak
//   remove(17) // dosyayı silecek
//   removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//   parentFolderOf(17) // ==> 5

