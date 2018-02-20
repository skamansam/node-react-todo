const listItemData = [
    {
        name: 'List Item 1',
        color: '#00ff00',
        list_id: 1,
        id: 1
    },
    {
        name: 'List Item 2',
        list_id: 1,
        id: 2
    },
    {
        name: 'List Item 3',
        list_id: 1,
        id: 3
    },
    {
        name: 'List Item 4',
        list_id: 1,
        id: 4
    },
    {
        name: 'List Item 5',
        list_id: 1,
        id: 5
    }
]

class ListItem {
    constructor(data){
        this.name, this.list_id, this.id = data.name, data.list_id, data.id
    }
    forList(listId){
        const id = listId.list_id || listId
        return lists.find( (data) => { return data.list_id == id })
    }
    find(id) {
        return lists.find( (data) => { return data.id == id })
    }
    all() {
        return lists
    }
}

export default ListItem;