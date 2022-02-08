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
  let targetFile = null;
  let targetFolder = null;

function move(targetfileId, targetFolderId) {
    //dosya arama işlemi
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
      
      console.log("Dosya bulunamadı")
      return false
    }
    
    if(!targetFolder){
      console.log("Klasör bulunamadı")
      return false
    }
   
    //ilgili dosyayı klasöre taşıma
    targetFolder.files.push(targetFile)
  
  
    //@todo - dosya silenecek eski yerinden
    const index = oldFolder.files.findIndex(prop => prop.id === targetFile.id);
    oldFolder.files.splice(index,1);
    
    console.log("Taşıma işlemi başarılı")

    
}


function copy (targetfileId, targetFolderId) {

  //dosya arama işlemi
  let targetFile = null;
  let targetFolder = null;

  // hedef dosyaya ulaşma

  for(const folder of folders){
     const {id, name, files} = folder //destruction
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
    console.log("Dosya bulunamadı")
    return false
  }
  if(!targetFolder){
    console.log("Klasör bulunamadı")
    return false
  }

  //ilgili dosyayı klasöre kopyalama
  //yeni dosyanın id'si değişicek ve referans bağlantısını koparmamız gerekli
  //öncelikle aynı referans değişkeni olmamaları gerekli ondan ilgili satırın referans bağını kesmemiz gerekli.
 
  CopiedTargetFile = { //yeni obje oluşturarak referans bağını kırabiliriz.
    id: Math.floor(Math.random() * 1000), // 0-1000 arasında bir id üretiyoruz
    name: targetFile.name
   }

   //ilgili dosyayı klasöre taşıma
   targetFolder.files.push(CopiedTargetFile)

   console.log("Kopyalama işlemi başarılı")

}

function remove(targetfileId) {
   //dosya arama işlemi
   let targetFile = null;
   let targetFolder = null;

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
    console.log("Silinecek dosya bulunamadı")
    return false
  }
 

 // dosya silme işlemi
 //https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property?answertab=active#tab-top
  const index = targetFolder.files.findIndex(prop => prop.id === targetFile.id);
  targetFolder.files.splice(index,1);

  
  console.log("silme işlemi başarılı")
}

// klasör silme işlemi
function removeFolder(targetFolderId) {
 
  const index = folders.findIndex(prop => prop.id === targetFolderId);
  
  if(index === -1 ){
    console.log("Silinecek klasör mevcut değil")
  }else {
    folders.splice(index,1);
    console.log("Klasör silme işlemi başarılı")
  }
  
}

function parentFolderOf(targetfileId) {

  //dosya arama işlemi
  let targetFile = null;
  let targetFolder = null;

  // hedef dosyaya ulaşma
  
  for(const folder of folders){
     const {files} = folder //destruction
     if(files) { //dosyalar varsa dolanacak
      targetFolder = folder;
      targetFile = (files.find( file => file.id === targetfileId)) 
      
      if(targetFile) {//dosyaya ulaştıysak //ensona gidiyor handle et!
        break;
      } 
     }
  }

  if(!targetFile) {
    console.log("Dosya bulunamadı")
    return false
  }

  if(targetFolder) {
    console.log(`Parent Folder Of  : ${targetFolder.id}`) //handle etmemiz gerekli
  } else {
    console.log(`Parent folder is not found`)
  }


}


  move(46,5)
  console.log(folders[0].files) 
  console.log(folders[3].files) 

// copy(8,10) // kopyasını oluşturacak
// console.log(folders[0].files) 
// console.log(folders[3].files) 

// folders[3].files[2].name = "asd.jpg"
// console.log(folders[0].files) //başarılı 
// console.log(folders[3].files) 

  // remove(21) // dosyayı silecek 
  // console.log(folders[1].files) 
  //başarılı

  


//  removeFolder(10) //klasörü ve altındaki tüm dosyaları silecek
//  console.log(folders)
//başarılı
 //parentFolderOf(12) // ==> 5
 //başarılı
 
//   move(17,6) // dosyayı klasöre taşıyacak
//   copy(18,7) // kopyasını oluşturacak
//   remove(17) // dosyayı silecek
//   removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//   parentFolderOf(17) // ==> 5
console.log("\n");
console.log("\n");
console.log("***************************")
console.log(folders);