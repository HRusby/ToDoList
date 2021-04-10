namespace ToDoListBackEnd.Api.Domain
{
    public class ListItem
    {
        public int Id {get; private set;}
        public string Text {get; private set;}
        public bool IsCompleted{get; private set;}

        public ListItem(int id, string text, bool isCompleted)
        {
            Id = id;
            Text = text;
            IsCompleted = isCompleted;
        }
    }
}