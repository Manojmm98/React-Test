//Q6) Which component will be rendered by the following code when navigating to '/login' route ?
//Give explanation for your answer.
ReactDOM.render((
<Router>
<div>
<Route path="/" render={Home} />
<Route path="/login" render={Login} />
</div>
</Router>),
document.getElementById('root')
);



// whilw we are going to '/login' route then there will be two matches one is '/' and another one is '/login' so it will render two times for two matches
