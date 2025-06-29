import React, {useState, useEffect} from 'react';

type Post = {
    id: number
    userId: number
    title: string
    body: string
}
export default function DataFetching2() {
    const [post, setPost] = useState<Post | null>(null);
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [id, setId] = useState<number | ''>('');

    useEffect(() => {
        const loadData = async () => {
            try {
                setPending(true);
                const rez = await fetch(`https://jsonplaceholder.typicode.com/${id}`);
                if (!rez.ok) {
                    setError('Data fetching failed with this Id' + id);
                }

                const data = await rez.json();
                setPost(data);
                setPending(false);
            } catch (err) {
                setPending(false);
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError('Unknown error!')
                }
            }
        }

        void loadData();

    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = e.target;
        setId(value === '' ? '' : Number(value));
    }

    return (
        <div>
            {pending && <h2>Loading...</h2>}
            {post && <h2>{post.title} - {post.id}</h2>}
            {error && <h2>{error}</h2>}
            <label htmlFor="id">Type id: </label>
            <input id="id" type="text" onChange={handleChange} value={id} />
        </div>
    )
}