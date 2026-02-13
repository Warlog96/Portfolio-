import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      required: true,
      trim: true
    },
    about: {
      type: String,
      required: true
    },
    skills: {
      type: [String],
      required: true,
      default: []
    },
    projects: [
      {
        title: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        technologies: {
          type: [String],
          default: []
        },
        link: {
          type: String,
          default: ''
        },
        github: {
          type: String,
          default: ''
        }
      }
    ],
    experience: [
      {
        role: { type: String, required: true },
        company: { type: String, required: true },
        duration: { type: String, required: true },
        description: [String]
      }
    ],
    education: [
      {
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        year: { type: String, required: true }
      }
    ],
    achievements: [String],
    patents: [String],
    workshops: [
      {
        title: { type: String, required: true },
        description: String
      }
    ],
    languages: [String],
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    }
  },
  {
    timestamps: true
  }
);

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
