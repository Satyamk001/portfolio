import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, Eye, X } from "lucide-react";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewer = ({ isOpen, onClose }: ResumeViewerProps) => {
  const handleDownload = () => {
    // Create a sample resume download - in real app, this would be your actual resume file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1LcuVaVX-qjkDLM0Tw-QmKxOiTzOUVNgc/view?usp=sharing'; // Replace with actual resume PDF path
    link.download = 'Satyam_Resume.pdf';
    link.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] w-[95%] sm:w-full p-4 sm:p-6">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold">My Resume</DialogTitle>
          <div className="flex items-center space-x-2">
            {/* <Button
              onClick={handleDownload}
              className="bg-gradient-primary hover:opacity-90"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button> */}
            {/* <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button> */}
          </div>
        </DialogHeader>
        
        <div className="max-h-[75vh] overflow-y-scroll">
          {/* Resume Content - Replace with actual resume */}
          <div className="bg-white text-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-inner min-h-[400px] sm:min-h-[600px] lg:min-h-[800px]">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Satyam Kumar</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">Full Stack Developer</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-1 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
                  <span>satyamkmr37@gmail.com</span>
                  <span>+91 95829 06377</span>
                  <a href="https://linkedin.com/in/satyamk001" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/satyamk001</a>
                  <a href="https://github.com/satyamk001" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/satyamk001</a>
                </div>
              </header>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Experience</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer</h3>
                    <p className="text-gray-600 mb-2">Comely Enterprises Pvt. Ltd. | 5 Months</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Led development of scalable web applications using React, Node.js, and PostgreSQL</li>
                      <li>Improved application performance by 40% through code optimization and caching strategies</li>
                      <li>Mentored junior developers and conducted code reviews</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Backend Developer</h3>
                    <p className="text-gray-600 mb-2">Digital Guruji | 1 Months</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Developed responsive web applications using React and TypeScript</li>
                      <li>Collaborated with design team to implement pixel-perfect UI/UX</li>
                      <li>Integrated RESTful APIs and managed state with Redux</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Angular</li>
                      <li>React.js</li>
                      <li>Angular.js</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Git</li>
                      <li>Docker</li>
                      <li>AWS</li>
                      <li>Vercel</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">BTech in Electronics and Communication</h3>
                  <p className="text-gray-600">Maharaja Surajmal Institute of Technology | 2021 - 2025</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Resume Button Component
export const ResumeButton = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsResumeOpen(true)}
          variant="outline"
          className="border-primary/20 hover:border-primary/40 bg-glass backdrop-blur-glass shadow-glass hover:bg-primary/5"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Resume
        </Button>
      </motion.div>
      
      <ResumeViewer 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </>
  );
};