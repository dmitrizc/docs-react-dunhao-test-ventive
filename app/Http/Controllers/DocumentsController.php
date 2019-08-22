<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Document;
use Illuminate\Validation\ValidationException;

class DocumentsController extends Controller
{
    // Get list of documents
    function index(Request $request)
    {
        $query = Document::query();
        $documents = $query->with(['user'])->get();
        return response()->json([
            'message' => 'Successful',
            'documents' => $documents,
        ]);
    }

    // Post new document
    function postDocument(Request $request)
    {
        $this->validate($request, [
            'file' => 'required',
        ]);

        $file = $request->file('file');
        $filename = substr(md5(microtime()), 0, 10) . '.' . $file->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('/documents', $file, $filename);

        $document = Document::create([
            'title' => $file->getClientOriginalName(),
            'user_id' => Auth::id(),
            'path' => '/storage/documents/' . $filename,
        ]);

        return response()->json([
            'msg' => 'Document uploaded successfully',
            'id' => $document->id,
        ]);
    }
}
