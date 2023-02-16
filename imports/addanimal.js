Template.addAnimal.events({
    'click .js-saveAnimal'() {
      console.debug("save button clicked")
      
        let name = document.querySelector('.addAnimalName').value
        let species = document.querySelector('.addAnimalSpecies').value
        let image = document.querySelector("#image").value
        console.debug(`The ${name} has ${species} species has ${image} image` ) 
        Animaldb.insert({
            'name': name,
            'species': species,
            'image' : image
          })
        },
        'click .js-showAdd'() {
            // let addModal = document.querySelector("#addModal")
            $('#addModal').modal('show')
        },
        
        'input #image'() {
          const image = document.querySelector('#image')
          const imgAnimal = document.querySelector('#animalImg')
          imgAnimal.src= image.value
          console.debug(image.value)
      }
        
    })