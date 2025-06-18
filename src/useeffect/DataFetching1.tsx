import {useState, useEffect} from 'react';

type Post = {
    id: number
    userId: number
    title: string
    body: string
}
export default function DataFetching() {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const rez = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!rez.ok) {
                    setError('Data fetching failed')
                }
                const data = await rez.json();
                setPosts(data);
                setLoading(false);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError('Unknown error!')
                }
                setLoading(false)
            }
        }

        void loadData();

    }, [])


    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts && (
                <ul>
                    {posts.map(post => (<li key={post.id}>{post.title}</li>))}
                </ul>
            )}
        </div>
    )
}