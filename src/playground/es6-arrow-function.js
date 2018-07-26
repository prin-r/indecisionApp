
const append = (x,n) => (x[n])? [<li key='1'>{x[n]}</li>,append(x,n+1)]: null;

const genOlLi = (x) => <ol>{append(x,0)}</ol>;

const template = (
<div>
    {genOlLi(['s1','s2','s3','s4','s5'])}
</div>
);

const fn1 = 'mumu kabigon';
const fn2 = 'momo toto';

const getFirstName = (x) => {
    return x.split(' ')[0];
}

const getFirstNameShort = (x) => x.split(' ')[0];

console.log(getFirstName(fn1));
console.log(getFirstNameShort(fn2));


const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
