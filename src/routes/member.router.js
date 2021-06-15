const express = require('express')
const router = express.Router()
const memberControllers = require('../controllers/member.controller')

// get all members
router.get('/', memberControllers.allMembers)

// get single member
router.get('/:id', memberControllers.showMember)

// create member
router.post('/', memberControllers.createMember)

// update member
router.put('/:id', memberControllers.updateMember)

// delete member
router.delete('/:id', memberControllers.deleteMember)

module.exports = router
