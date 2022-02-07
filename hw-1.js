const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
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
  ]


function move(targetfileId, targetFolderId) {
    //dosya arama işlemi
    let targetFile = null;
    let targetFolder = null;

    // hedef dosyaya ulaşma

    for(const folder of folders){
       const {id, name, files} = folder //destruction
       if(files) { //dosyalar varsa dolanacak
        targetFile = (files.find( file => file.id === targetfileId))
        break; 
       }
    }

    //hedef klasöre ulaşma
    targetFolder = folders.find(folder => folder.id === targetFolderId)
    
    
    //ilgili dosyayı klasöre taşıma
    targetFolder.files.push(targetFile)
  
  
    //@todo - dosya silenecek eski yerinden

    console.log("taşıma işlemi başarılı")
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
      break; 
     }
  }

  //hedef klasöre ulaşma
  targetFolder = folders.find(folder => folder.id === targetFolderId)

  //@todo - üstteki logic move ve copy de aynı ondan bunları başka bir func içerisine alabilirim.

  //ilgili dosyayı klasöre kopyalama
  //@todo yeni dosyanın idsi değişicek ve referans bağlantısını koparmamız gerekli
  //öncelikle aynı referans değişkeni olmamaları gerekli ondan ilgili satırın referans bağını kesmemiz gerekli.
 
  CopiedTargetFile = { //yeni obje oluşturarak referans bağını kırabiliriz.
    id: 1,
    name: targetFile.name
   }

   //ilgili dosyayı klasöre taşıma
   targetFolder.files.push(CopiedTargetFile)

   console.log("kopyalama işlemi başarılı")

}

function remove(targetfileId) {
   //dosya arama işlemi
   let targetFile = null;
   let targetFolder = null;

  // hedef dosyaya ulaşma
  for(const folder of folders){
    const {id, name, files} = folder //destruction
    if(files) { //dosyalar varsa dolanacak
     targetFolder = folder; //geçiçi olarak atadık break ifadesi ile çıkılırsa target folder en son folder yani hedef olmuş olur
     targetFile = (files.find( file => file.id === targetfileId))
     break; 
    }
 }

 // dosya silme işlemi
 //https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property?answertab=active#tab-top
  const index = targetFolder.files.findIndex(prop => prop.id === targetFile.id);
  targetFolder.files.splice(index,1);
  //console.log(targetFolder.files)
}

// klasör silme işlemi
function removeFolder(targetFolderId) {
 
  const index = folders.findIndex(prop => prop.id === targetFolderId);
  folders.splice(index,1);

}

function parentFolderOf(targetfileId) {

  //dosya arama işlemi
  let targetFile = null;
  let targetFolder = null;

  // hedef dosyaya ulaşma

  for(const folder of folders){
     const {id, name, files} = folder //destruction
     if(files) { //dosyalar varsa dolanacak
      targetFolder = folder;
      targetFile = (files.find( file => file.id === targetfileId))
      break; 
     }
  }

  if(targetFolder) {
    console.log(`Parent Folder Of ${targetFile.name} : ${targetFolder.id}`)
  }


}




// move(17,6)
// console.log(folders[1].files) 

// copy(18,5) // kopyasını oluşturacak

// folders[0].files[1].name = "deneme.jpg"
// console.log(folders[0].files) //başarılı 

// remove(17) // dosyayı silecek 
// //başarılı


// removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//başarılı
parentFolderOf(17) // ==> 5
 
//   move(17,6) // dosyayı klasöre taşıyacak
//   copy(18,7) // kopyasını oluşturacak
//   remove(17) // dosyayı silecek
//   removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//   parentFolderOf(17) // ==> 5
