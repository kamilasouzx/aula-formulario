import { Link } from "react-router-dom"
export function Consult() {
    return (
        <div>
            <h1 className="text-3xl text-gray-800 mb-4">Listar cadastros</h1>
            <form className="space-y-2">
                <div className="flex flex-row align-middle gap-2">
                    <div>
                        <input
                            placeholder='Pesquisar...'
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Link className="border border-indigo-700 p-2 text-white rounded-lg bg-indigo-700 hover:bg-indigo-500 hover:border-indigo-500" to="/cadastrar">CADASTRAR</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}