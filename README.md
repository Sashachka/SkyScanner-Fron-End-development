problem i get into while working with that project and how to solve it.
Problem: ERROR in ./node_modules/bpk-component-calendar/src/BpkCalendarContainer.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /Users/sashashkurnikova/Desktop/my-app/node_modules/bpk-component-calendar/src/BpkCalendarContainer.js: Support for the experimental syntax 'jsx' isn't currently enabled (311:9):
Basicly a lot of ununderstandanle words. But let me explain what the problem here is it doesn't know about what calendar and where to take it.
Main problem here is that calendar is given with stroke in terminal from skyscanner: npm install bpk-component-calendar --save-dev
but then the problem becomes that out main code is a lit bit old and does not compile with versions so first thought to do this right: npm install bpk-component-calendar --save-dev --legacy-peer-deps
Clearly just force it with --legacy-peer-deps and it should work. Unfortunately it didn't. With that it just craks the code and in my case messed up my JSON files.
But we have the way to do it more accurate just downgrade React to 17 so npm install react@17 react-dom@17 --legacy-peer-deps
then: npm install bpk-component-calendar --save-dev which finaly installed library for calendar to use.
And then as follows in instructions coding normally.
Another problem was that on site (https://www.skyscanner.design/latest/welcome-to-backpack-Mtf5OEo4) Backpack scanner they did shortcut, that in my case didn't work and if you need to access calendar you need to go components -> calendar. 
But here lies another problem as I'm an IOS user I open its page and there is 404 not found here is site where it basicly the same but different: https://www.npmjs.com/package/bpk-component-calendar
But I didn't use at as it builds calendar from scratch so the code to use calendar which we downloaded is :

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Schedule</h1>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
        />
        <button onClick={() => alert('Continue clicked!')}>Continue</button>
      </header>
    </div>
  );
}

You see that it just use it and not build from scratch it was the main idea. So with that I hope your app for SkyScanner works, thank you for that expirience.
