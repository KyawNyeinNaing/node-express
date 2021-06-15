const members = require('../models/members.model')
const uuid = require('uuid')

// all member
const allMembers = async (req, res) => {
  const result = await res
  result.json({ members })
}

// single member
const showMember = async (req, res) => {
  const found = await members.some(member => member.id === +req.params.id)

  if (found) {
    res.json(members.filter(member => member.id === +req.params.id))
  } else {
    res.status(400).json({
      status: 400,
      msg: `No member with the id of ${req.params.id}`
    })
  }
}

// create member
const createMember = async (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include name and email' })
  }

  members.push(newMember)
  res.status(402).json({
    msg: 'Created', 
    members
  })
}

// update member
const updateMember = async (req, res) => {
  const found = await members.some(member => member.id === +req.params.id)

  if (found) {
    const updateMember = req.body
    members.forEach(member => {
      if(member.id === +req.params.id) {
        member.name = updateMember.name ? updateMember.name : member.name,
        member.email = updateMember.email ? updateMember.email : member.email

        res.json({
          msg: 'Member updated',
          member
        })
      }
    })

  } else {
    res.status(400).json({
      status: 400,
      msg: `No member with the id of ${req.params.id}`
    })
  }
}

// delete member
const deleteMember = async (req, res) => {
  const found = await members.some(member => member.id === +req.params.id)

  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => member.id !== +req.params.id)
    })
  } else {
    res.status(400).json({
      status: 400,
      msg: `No member with the id of ${req.params.id}`
    })
  }
}

module.exports = {
  allMembers,
  showMember,
  createMember,
  updateMember,
  deleteMember
}