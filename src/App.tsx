function App() {
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex items-center h-[50px] bg-sky-700 text-white p-2">
        Menu
      </div>
      <div className="h-[calc(100vh-50px)] overflow-y-auto bg-slate-300 p-8">
        container
      </div>
    </div>
  );
}

export default App;
