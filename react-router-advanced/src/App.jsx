import ProtectedRoute from "./components/ProtectedRoute";

const isAuthenticated = true; "BrowserRouter"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>
        </Router>
    );
};

export default App;
