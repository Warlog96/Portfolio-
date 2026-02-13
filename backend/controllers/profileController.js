import Profile from '../models/Profile.js';

// @desc    Get profile data
// @route   GET /api/profile
// @access  Public
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    
    if (!profile) {
      return res.status(404).json({ 
        success: false,
        message: 'Profile not found' 
      });
    }

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server Error',
      error: error.message 
    });
  }
};

// @desc    Create or update profile data
// @route   POST /api/profile
// @access  Public (In production, this should be protected)
export const createOrUpdateProfile = async (req, res) => {
  try {
    const { name, role, about, skills, projects, email } = req.body;

    // Check if profile exists
    let profile = await Profile.findOne();

    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate(
        {},
        { name, role, about, skills, projects, email },
        { new: true, runValidators: true }
      );
    } else {
      // Create new profile
      profile = await Profile.create({
        name,
        role,
        about,
        skills,
        projects,
        email
      });
    }

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating/updating profile',
      error: error.message
    });
  }
};
