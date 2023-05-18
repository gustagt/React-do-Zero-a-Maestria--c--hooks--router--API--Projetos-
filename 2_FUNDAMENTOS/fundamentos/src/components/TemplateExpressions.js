const TemplateExpressions = () => {

    const name =  'Matheus';
    const data = {
        age: 20,
        job: 'Engenheiro'
    }

    return (
        <div>
            <h1> Olá {name}!</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log('Teste')}</p>
        </div>
    )
}

export default TemplateExpressions;