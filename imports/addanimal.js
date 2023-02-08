Template.addAnimal.events({
    'click .js-saveAnimal'() {
      console.debug("save button clicked")
        let name = document.querySelector('.addanimalName').value
        let Species = document.querySelector('.addanimalSpecies').value
        console.debug(`The ${name} has ${Species} Species`)
        farmdb.insert({
            'name':name,
            'Species' : Species
            
        })
    },
    'click .js-showAdd'() {
      // let addModal = document.querySelector("#addModal")
      $('#addModal').modal('show')
    }
  })