import React, {useEffect, useState} from "react";

type Post = {
    id: number
    userId: number
    title: string
    body: string
}
export default function DataFetching3() {
    const [post, setPost] = useState({} as Post);
    const [id, setId] = useState<string>('');
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [submittedId, setSubmittedId] = useState<string>('');

    useEffect(() => {
        const loadData = async () => {
            try {
                setPending(true);
                const rez = await fetch(`https://jsonplaceholder.typicode.com/posts/${submittedId}`);
                if (!rez.ok) {
                    setError('Data fetching failed');
                }
                const data = await rez.json();
                setPost(data);
                setPending(false);
                setError('');
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('unknown error')
                }
                setPending(false);
            }
        }

        void loadData();
    }, [submittedId])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setId(e.target.value);
    const clickHandler = (): void => setSubmittedId(id);

    return (
        <div>
            {pending && <h2>Loading...</h2>}
            {post && <h2>{post.title}</h2>}
            {error && <h2>{error}</h2>}
            <label htmlFor="id">Type id</label>
            <input id="id" type="text" onChange={handleChange} value={id} required={true} />
            <button onClick={clickHandler}>Fetch Data By Id</button>
        </div>
    )
}