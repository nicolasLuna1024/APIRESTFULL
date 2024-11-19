import tourModel from "../models/tour.js";
import {v4 as uuidv4} from 'uuid'

const getAllToursControllers = async (req, res) => {
    const tours = await tourModel.getAllToursModel();
    res.status(200).json(tours);
}

const createTourController = (req,res) => {
    const newTourData = {
        id:uuidv4(),
        ...req.body
    }
    try {
        const tour = tourModel.createTourModel(newTourData)
        res.status(201).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
    
}


const updateTourController = (req,res) => {
    const {id} = req.params
    try {
        const tour = tourModel.updateTourModel(id,req.body)
        res.status(200).json(tour)

    } catch (error) {
        req.status(500).json(error)
    }
    
}

const deleteTourController = async (req,res) => {
    const {id} = req.params
    try {
        await tourModel.updateTourModel(id)
        res.status(200).json({msg:"Tour eliminado"})
    } catch (error) {
        req.status(500).json(error)
    }

}



export {
    getAllToursControllers,
    createTourController,
    updateTourController,
    deleteTourController
} 