import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt, BiInfoCircle, BiCommentDetail, BiEnvelope, BiCalendar, BiEdit, BiSearch, BiUpvote, BiDownvote } from 'react-icons/bi'

interface Idea {
  id: number
  title: string
  description: string
  category: string
  estimatedReturn: number
  published: boolean
  createdAt: string
  updatedAt: string
  upvotes: number
  downvotes: number
  comments: Comment[]
  status: string
}

interface Comment {
  id: number
  text: string
  author: string
  createdAt: string
}

const categories = [
  'Artificial Intelligence & Machine Learning',
  'Renewable Energy & Sustainability',
  'Quantum Computing',
  'Biotechnology & Genomics',
  'Cybersecurity & Data Privacy',
  '5G & Connectivity',
  'Autonomous Vehicles & Drones',
  'Internet of Things (IoT) & Smart Devices',
  'Fintech & Digital Currency',
  'Augmented Reality (AR) & Virtual Reality (VR)',
  'Climate Tech & Carbon Capture',
  'EdTech & Digital Learning Platforms',
  'AUTOMOTIVEs',
]

const Ideas: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [ideasPerPage] = useState(6)
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ideas/getideas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          throw new Error('Failed to fetch ideas')
        }
        const data = await response.json()
        const sortedIdeas = data.data.map((idea: Idea) => ({
          ...idea,
          upvotes: 0,
          downvotes: 0,
          comments: [],
          status: idea.published ? 'Published' : 'Draft'
        })).sort((a: Idea, b: Idea) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        setIdeas(sortedIdeas)
        setLoading(false)
      } catch (err) {
        setError('Failed to load ideas. Please try again later.')
        setLoading(false)
      }
    }

    fetchIdeas()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const openIdeaPopup = (idea: Idea) => {
    setSelectedIdea(idea)
  }

  const closeIdeaPopup = () => {
    setSelectedIdea(null)
    setNewComment('')
  }

  const filteredIdeas = ideas.filter(idea =>
    idea.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastIdea = currentPage * ideasPerPage
  const indexOfFirstIdea = indexOfLastIdea - ideasPerPage
  const currentIdeas = filteredIdeas.slice(indexOfFirstIdea, indexOfLastIdea)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleVote = (ideaId: number, voteType: 'up' | 'down') => {
    setIdeas(prevIdeas =>
      prevIdeas.map(idea =>
        idea.id === ideaId
          ? {
            ...idea,
            upvotes: voteType === 'up' ? idea.upvotes + 1 : idea.upvotes,
            downvotes: voteType === 'down' ? idea.downvotes + 1 : idea.downvotes
          }
          : idea
      )
    )
  }

  const handleCommentSubmit = (ideaId: number) => {
    if (newComment.trim() === '') return

    const comment: Comment = {
      id: Date.now(),
      text: newComment,
      author: 'Anonymous', // Replace with actual user name when authentication is implemented
      createdAt: new Date().toISOString()
    }

    setIdeas(prevIdeas =>
      prevIdeas.map(idea =>
        idea.id === ideaId
          ? { ...idea, comments: [...idea.comments, comment] }
          : idea
      )
    )

    setNewComment('')
  }

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-6 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center group transition-transform hover:scale-105">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <svg className="w-10 h-10 mr-3 text-blue-200 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
              </svg>
              <span className="font-extrabold tracking-wider">Crowdspace</span>
            </Link>
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <BiHomeAlt className="mr-2 text-xl" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <BiInfoCircle className="mr-2 text-xl" />
                About
              </Link>
            </li>
            <li>
              <Link to="/ideas" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <BiCommentDetail className="mr-2 text-xl" />
                Ideas
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <BiEnvelope className="mr-2 text-xl" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-12 px-6">
        <h1 className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Innovative Ideas
        </h1>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search ideas by category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring"
              list="categories"
            />
            <BiSearch className="absolute left-3 top-3 text-gray-400" />
            <datalist id="categories">
              {categories.map((category, index) => (
                <option key={index} value={category} />
              ))}
            </datalist>
          </div>
        </div>

        <div className="mb-8">
          <Link
            to="/ideas/new"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300"
          >
            Create New Idea
          </Link>
        </div>

        {loading && (
          <div className="text-center text-gray-600 text-xl">Loading ideas...</div>
        )}

        {error && (
          <div className="text-center text-red-600 text-xl">{error}</div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentIdeas.map((idea) => (
                <div
                  key={idea.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <h2 className="text-2xl font-bold text-blue-600 mb-4">{idea.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{idea.description}</p>
                  <div className="mb-4">
                    <span className="font-semibold text-gray-700">Category:</span>
                    <span className="ml-2 text-gray-600">{idea.category}</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-gray-700">Est. Return:</span>
                    <span className="ml-2 text-gray-600">{idea.estimatedReturn}%</span>
                  </div>
                  <button
                    onClick={() => openIdeaPopup(idea)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Read More
                  </button>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                    <div className="flex items-center">
                      <BiCalendar className="mr-1" />
                      Created: {formatDate(idea.createdAt)}
                    </div>
                    <div className="flex items-center">
                      <BiEdit className="mr-1" />
                      Updated: {formatDate(idea.updatedAt)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredIdeas.length > ideasPerPage && (
              <div className="flex justify-center mt-8">
                {[...Array(Math.ceil(filteredIdeas.length / ideasPerPage))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 mx-1 rounded-md transition-colors duration-300 ${currentPage === index + 1
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white text-blue-600 hover:bg-gray-200'
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About Crowdspace</h3>
              <p className="text-blue-100">
                Connecting innovative minds with visionary investors to create tomorrow's solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/ideas" className="text-blue-100 hover:text-white transition-colors duration-300">
                    Browse Ideas
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-blue-100 hover:text-white transition-colors duration-300">
                    Become an Investor
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-300">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-blue-100">Email: hello@crowdspace.com</li>
                <li className="text-blue-100">Phone: (555) 123-4567</li>
                <li className="text-blue-100">Location: Innovation Hub, Tech City</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-blue-100 mb-4">Stay updated with our latest innovations</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
          <div className="border-t border-blue-400 mt-12 pt-8 text-center text-blue-100">
            &copy; 2024 Crowdspace. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Idea Popup */}
      {selectedIdea && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full m-4">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">{selectedIdea.title}</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Description</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{selectedIdea.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="font-semibold text-gray-700">Category:</span>
                <span className="ml-2 text-gray-600">{selectedIdea.category}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Est. Return:</span>
                <span className="ml-2 text-gray-600">{selectedIdea.estimatedReturn}%</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Status:</span>
                <span className={`ml-2 ${selectedIdea.status === 'Published' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {selectedIdea.status}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <BiCalendar className="mr-1" />
                Created: {formatDate(selectedIdea.createdAt)}
              </div>
              <div className="flex items-center">
                <BiEdit className="mr-1" />
                Updated: {formatDate(selectedIdea.updatedAt)}
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <button
                onClick={() => handleVote(selectedIdea.id, 'up')}
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <BiUpvote className="mr-2" />
                Upvote ({selectedIdea.upvotes})
              </button>
              <button
                onClick={() => handleVote(selectedIdea.id, 'down')}
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                <BiDownvote className="mr-2" />
                Downvote ({selectedIdea.downvotes})
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Comments</h3>
              {selectedIdea.comments.length === 0 ? (
                <p className="text-gray-600">No comments yet. Be the first to comment!</p>
              ) : (
                selectedIdea.comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-2">
                    <p className="text-gray-700">{comment.text}</p>
                    <div className="text-sm text-gray-500 mt-2">
                      <span>{comment.author}</span> - <span>{formatDate(comment.createdAt)}</span>
                    </div>
                  </div>
                ))
              )}
              <div className="mt-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows={3}
                />
                <button
                  onClick={() => handleCommentSubmit(selectedIdea.id)}
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Comment
                </button>
              </div>
            </div>
            <button
              onClick={closeIdeaPopup}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ideas