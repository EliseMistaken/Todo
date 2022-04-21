
/*
3 major UI components, header, project nav bar, and project display. 
Grid for layout. UI will be very similar to admin dashboard tbh. 
Nav bar, and project display will be dynamically filled, I'd like to use the localStorage and load from there. 

Objects:
    TodoItem -> name, due date, description, status. Factory function
    Project -> has todoitems. Factory Function
    ProjectView -> handles displaying a new project/outputting to DOM. Module
    TodoView ->  unsure if necessary, might bundle with project view. The view would just handle DOM operations. Module

    Where to handle deletion of things? 

You can do this hon. I feel like I can't, but I can. 

*/


function todoItem(name='', description='', date='', priority=0){
    let name  = name;
    let description = description;
    let date = date;
    let priority = priority;

     
}

function project() {
    let projectName = '';
    let items = []

    
}