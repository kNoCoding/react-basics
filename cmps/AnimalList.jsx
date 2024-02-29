

export function AnimalList({ animalInfos }) {

    console.log(animalInfos);
    const baseUrl = 'https://www.google.com/search?q='

    const animalsList = animalInfos.map((animal) => {
        return (
            <tr key={animal.type}>
                <td>{animal.type}</td>
                <td>{animal.count}</td>
                <td><a href={`${baseUrl}${animal.type}`}>Search</a></td>
            </tr>
        )
    })

    return (
        <div className="animal-list flex flex-column justify-center">
            <h1>Rare Animals</h1>

            <table>
                <tbody>
                    {animalsList}
                </tbody>
            </table>
        </div>
    )
}