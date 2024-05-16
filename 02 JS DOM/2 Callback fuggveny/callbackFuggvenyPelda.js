//CALLBACK
function fuggveny(parameter, csinal)
{
    let tomb = parameter.Split();
    tomb.reverse();
    let res = tomb.join("");
    return csinal(res);
}

const nagyBetu = (parameter) => parameter.toUpperCase();
const kisBetu = (parameter) => parameter.toLowerCase();

fuggveny("alma", nagyBetu);