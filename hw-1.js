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
  
}



// move(17,6)
// console.log(folders[1].files) 


  
//   move(17,6) // dosyayı klasöre taşıyacak
//   copy(18,7) // kopyasını oluşturacak
//   remove(17) // dosyayı silecek
//   removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//   parentFolderOf(17) // ==> 5
