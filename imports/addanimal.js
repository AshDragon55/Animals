Template.addAnimal.events({
    'click .js-saveAnimal'() {
      console.debug("save button clicked")
        let name = document.querySelector('.addanimalName').value
        let species = document.querySelector('.addanimalSpecies').value
        let image = document.querySelector("#image").value
        // console.debug(`The ${name} has ${species} species`)
        Animals.insert({
            'name': name,
            'Species': species,
            'image': image
            
          })
        },
        'click .js-showAdd'() {
            // let addModal = document.querySelector("#addModal")
            $('#addModal').modal('show')
        }
    })