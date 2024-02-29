import { AnimalList } from './AnimalList.jsx'
import { UserPreview } from './UserPreview.jsx'

export function Home() {

    let animalInfos = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },
    ]

    return (
        <section>
            <h2>Home Sweet Home</h2>
            <UserPreview />
            <AnimalList animalInfos={animalInfos} />
        </section>
    )
}
